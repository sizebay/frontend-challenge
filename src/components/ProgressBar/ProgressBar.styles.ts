import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';
import defaultTheme from '../../styles/themes/default';

export const ProgressBarWrapper = styled.div`
    width: 100%;
`

export const StyledLinearProgress = styled(LinearProgress)`
    && {
        height: 24px;
        background-color: ${defaultTheme.gray[300]};
        border-radius: 4px;

        .MuiLinearProgress-bar {
            background-color: ${defaultTheme.green[500]};
            border-radius: 4px 0px 0px 4px;
            width: ${(props) => props.value ? `${props.value}` : '0'};
        }
    }
`;
