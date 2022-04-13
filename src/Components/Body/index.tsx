import { StyledBody } from './Body'

export interface Props {
    variant?: string;
    dataCy?: string;
    children: React.ReactNode;
}

function Body(props: Props) {
    return <StyledBody variant={props.variant ?? "normal"} data-cy={props.dataCy}>{props.children}</StyledBody>
}

export default Body;