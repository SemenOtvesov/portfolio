import React from 'react';
import addButtonClick from './addButtonClick';
import useAppDispatch from '@js/hooks/useAppDispatch';
import {
    TuserInfoCommonListItem,
    TuserInfoCommonListItemNames,
} from '@js/types/state/user/userState';
import useGetUserInfoCommonLastId from '@js/hooks/useGetUserInfoCommonLastId';
import commonItemSetRequest from '@js/state/user/asyncThunk/commonItem/commonItemSetRequest';
import commonItemDeleteRequest from '@js/state/user/asyncThunk/commonItem/commonItemDeleteRequest';

type Tprops = {
    type: TuserInfoCommonListItemNames;
    title: string;
    prise: number;
    edit?: undefined | TuserInfoCommonListItem;
};

export default ({ type, title, prise, edit }: Tprops) => {
    const dispatch = useAppDispatch();
    const lastId = useGetUserInfoCommonLastId(type);

    if (edit) {
        return (
            <>
                <button
                    onClick={() =>
                        dispatch(
                            commonItemSetRequest({
                                body: { title, prise, id: edit.id, completed: edit.completed },
                                type,
                            }),
                        )
                    }
                    className="statistics__left-popap-button"
                >
                    Изменить
                </button>
                <button
                    onClick={() =>
                        dispatch(
                            commonItemDeleteRequest({
                                id: edit.id,
                                type,
                            }),
                        )
                    }
                    className="statistics__left-popap-button orange"
                >
                    Удалить
                </button>
                <button className="statistics__left-popap-button red">Отмена</button>
                {type === 'purpose' ? (
                    <button
                        onClick={() =>
                            dispatch(
                                commonItemSetRequest({
                                    body: { title, prise, id: edit.id, completed: !edit.completed },
                                    type,
                                }),
                            )
                        }
                        className="statistics__left-popap-button green"
                    >
                        Выполнено
                    </button>
                ) : (
                    ''
                )}
            </>
        );
    }
    return (
        <>
            <button
                onClick={() => {
                    addButtonClick({
                        title,
                        prise,
                        id: lastId + 1,
                        type,
                        dispatch,
                    });
                }}
                className="statistics__left-popap-button"
            >
                Добавить
            </button>
            <button className="statistics__left-popap-button red">Отмена</button>
        </>
    );
};
