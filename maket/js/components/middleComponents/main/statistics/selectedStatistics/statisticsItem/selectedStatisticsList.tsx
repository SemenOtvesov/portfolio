import { TuserInfoCommonListItem } from '@js/types/state/user/userState';
import React from 'react';

type Tprops = {
    subItems: TuserInfoCommonListItem[] | undefined;
    setEditenum: React.Dispatch<React.SetStateAction<TuserInfoCommonListItem | undefined>>;
};

export default ({ subItems, setEditenum }: Tprops) => {
    return subItems?.map(el => (
        <div
            onClick={() =>
                setEditenum({
                    title: el.title,
                    prise: el.prise,
                    id: el.id,
                    completed: el.completed,
                })
            }
            className="statistics__left-item-subItem"
            key={Math.random()}
        >
            {genCheck(el.completed, el)}
        </div>
    ));
};
function genCheck(compl: boolean | undefined, el: TuserInfoCommonListItem) {
    if (compl === false) {
        return (
            <>
                <div className="statistics__left-item-subItem-title-box">
                    <div className="statistics__left-item-subItem-check">
                        <span />
                    </div>
                    <div className="statistics__left-item-subItem-title">{el.title}</div>
                </div>
                <div className="statistics__left-item-subItem-text">{el.prise} ₽</div>
            </>
        );
    }
    if (compl === true) {
        return (
            <>
                <div className="statistics__left-item-subItem-title-box">
                    <div className="statistics__left-item-subItem-check active">
                        <span />
                    </div>
                    <div className="statistics__left-item-subItem-title">{el.title}</div>
                </div>
                <div className="statistics__left-item-subItem-text">{el.prise} ₽</div>
            </>
        );
    }
    return (
        <>
            <div className="statistics__left-item-subItem-title">{el.title}</div>
            <div className="statistics__left-item-subItem-text">{el.prise} ₽</div>
        </>
    );
}
