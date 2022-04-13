import { StyledHeadline } from './Headline'

export interface Props {
    size: number;
    variant?: string;
    children: React.ReactNode;
    dataCy?: string; 
}

function Headline(props: Props) {

    const sizes = [ 96, 60, 48, 34, 24, 20 ];

    return (
        <StyledHeadline data-cy={props.dataCy ?? null} size={sizes[props.size - 1]} variant={props.variant ?? "normal"}>
            {props.children}
        </StyledHeadline>
    )
}

export default Headline;