import { burgerStyled, variantsBurger } from './style';

export default ({ state }: { state: boolean | undefined }) => {
    const Burger = burgerStyled(state);
    return (
        <Burger
            key={`${state}`}
            initial={'initial'}
            exit={'initial'}
            animate={'animate'}
            variants={variantsBurger}
        >
            <span></span>
        </Burger>
    );
};
