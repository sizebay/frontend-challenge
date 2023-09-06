import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        
        colors: {
            container: string;
            components: string;
            background: string;
            text: string;
        }
    }
}