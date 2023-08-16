'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Image,
  Badge,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Kbd,
  Card,
  CardHeader,
  CardBody
} from '@nextui-org/react';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import { Button } from '../ButtonStyle';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getData } from '@/functions/getData';
import { FormDataSearch } from './Nav.types';
import { getCategory } from '@/functions/getCategory';
import { normalizeImage } from '@/functions/normalizeImage';
import { ItemClothes } from '@/types/itemClothes';
import { stringifyUrl } from '@/functions/stringifyUrl';

export const Nav = () => {
  const [filteredItems, setFilteredItems] = useState<ItemClothes[]>([]);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const { favorites } = useSelector(({ favorites }) => favorites);
  const { register, handleSubmit, setValue } = useForm<FormDataSearch>();

  const handleKeyDown = event => {
    if (event.metaKey && event.key === 'k') {
      onOpen();
    }
  };

  const onSubmit = async (data: FormDataSearch) => {
    if (data.searchText.trim() === '') {
      return setFilteredItems([]);
    }
    const response: ItemClothes[] = await getData();

    const filtered = response.filter(
      item =>
        item.category.includes(data.searchText) ||
        item.title.includes(data.searchText) ||
        item.vendor.includes(data.searchText)
    );

    setFilteredItems(filtered);
  };

  useEffect(() => {
    setValue('searchText', '');
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeModal = () => {
    onClose();
    setFilteredItems([]);
    setValue('searchText', '');
  };

  return (
    <>
      <Navbar
        shouldHideOnScroll
        isBordered
        className="mb-8 w-full h-20"
        maxWidth="2xl"
      >
        <NavbarContent justify="start">
          <NavbarItem>
            <Link href="/clothes" className="text-2xl">
              COLEÇÃO
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="center">
          <NavbarBrand>
            <Link href={'/'} className="sm:block font-bold text-inherit">
              <Image
                className="h-14"
                radius={'none'}
                alt="Sizebay logo"
                src="/Brand_Mark_Tag_Sizebay-REFINED_2x_2_540x.png"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent as="div" className="items-center w-full" justify="end">
          <Button
            variant="flat"
            color="default"
            onPress={onOpen}
            startContent={<Kbd keys={['command']}>K</Kbd>}
          >
            Pesquise por algum modelo, tipo ou coleção...
          </Button>
					<Link href={'/favorites'}>
          <Badge
            content={favorites.length}
            color="danger"
            variant="shadow"
            className={favorites.length === 0 && 'hidden'}
						>
            <Button variant="flat" isIconOnly color="danger" aria-label="Like">
              <AiFillHeart />
            </Button>
          </Badge>
						</Link>
        </NavbarContent>
      </Navbar>
      <Modal
        backdrop={'blur'}
        isOpen={isOpen}
        onClose={closeModal}
        onOpenChange={onOpenChange}
        className=" p-4"
        scrollBehavior="inside"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Pesquise por algum modelo, tipo ou coleção...
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                {...register('searchText')}
                classNames={{
                  base: 'max-w-full sm:max-w-[20rem] h-10',
                  mainWrapper: 'h-full',
                  input: 'text-small',
                  inputWrapper:
                    'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
                }}
                placeholder="Pesquise por algum modelo, tipo ou coleção..."
                size="sm"
                type="search"
              />
            </form>
            <section>
              {filteredItems.map(item => {
                const { category, className } = getCategory(item.category);
                const formattedPicture = normalizeImage(item.image);
                return (
                  <Link
                    key={item.title}
                    href={`/clothes/${stringifyUrl(item)}`}
                    onClick={closeModal}
                  >
                    <Card className="py-4 " shadow="none">
                      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className={`${className} uppercase font-bold`}>
                          Categoria: {category}
                        </p>
                        <small className="text-default-500">
                          Vendor: {item.vendor}
                        </small>
                        <h4 className="font-bold text-large">{item.title}</h4>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt={item.title}
                          className="object-cover rounded-xl"
                          src={formattedPicture}
                        />
                      </CardBody>
                    </Card>
                  </Link>
                );
              })}
            </section>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
