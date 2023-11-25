import React, { useContext } from 'react';
import InputGroupe from '@microComponets/input/inputGroupe';
import GlobalInput from '@microComponets/input/globalInput';
import RightDie from '@microComponets/input/rightDie';
import { useForm } from 'react-hook-form';
import { mailRegExp, nameRegExp, passRegExp, phoneRegExp } from './regExpConstants';
import { TloginForm } from '@js/types/forms/login';
import loginHandleSubmit from './loginHandleSubmit/loginHandleSubmit';
import { motion, AnimatePresence } from 'framer-motion';
import checkRegState from './checkRegState';
import LoginButtonBox from './loginButtonBox';
import { LayoutContext } from '@js/components/mainComponents/layout';
import useAppDispatch from '@js/hooks/useAppDispatch';

export default () => {
    const { regState, setRegState } = useContext(LayoutContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<TloginForm>({ mode: 'onChange' });
    const dispatch = useAppDispatch();

    return (
        <motion.form
            onSubmit={handleSubmit(data => loginHandleSubmit({ data, dispatch }))}
            className="popap-login"
            initial={{ x: '-100vw', y: '-100vh' }}
            animate={{ x: '-50%', y: '-50%' }}
            transition={{ duration: 0.2 }}
        >
            <div onClick={() => setRegState && setRegState(undefined)} className="popap-close">
                <span />
            </div>
            <div className="popap-login__title">
                {checkRegState({ state: regState, reg: 'Регистрация', login: 'Вход' })}
            </div>

            <AnimatePresence>
                {checkRegState({
                    state: regState,
                    reg: (
                        <InputGroupe groupeTitle="Имя">
                            <GlobalInput
                                register={register}
                                regExp={nameRegExp}
                                nameInput="name"
                                requiredText="Используйте пожалуйста кирилицу"
                            />
                            <RightDie error={errors['name']} value={watch('name')} />
                        </InputGroupe>
                    ),
                    login: '',
                })}
            </AnimatePresence>

            <InputGroupe groupeTitle="Почта">
                <GlobalInput
                    register={register}
                    regExp={mailRegExp}
                    nameInput="mail"
                    requiredText="Неверный адрес почты"
                />
                <RightDie error={errors['mail']} value={watch('mail')} />
            </InputGroupe>

            <AnimatePresence>
                {checkRegState({
                    state: regState,
                    reg: (
                        <InputGroupe groupeTitle="Телефон">
                            <GlobalInput
                                register={register}
                                regExp={phoneRegExp}
                                nameInput="phone"
                                requiredText="Используйте номер российского оператора"
                            />
                            <RightDie error={errors['phone']} value={watch('phone')} />
                        </InputGroupe>
                    ),
                    login: '',
                })}
            </AnimatePresence>

            <InputGroupe groupeTitle="Пароль">
                <GlobalInput
                    register={register}
                    regExp={passRegExp}
                    nameInput="pass"
                    requiredText="Не надёжный пароль"
                />
                <RightDie error={errors['pass']} value={watch('pass')} />
            </InputGroupe>

            <LoginButtonBox />
        </motion.form>
    );
};
