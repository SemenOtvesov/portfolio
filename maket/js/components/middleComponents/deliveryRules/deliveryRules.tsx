import React from "react";

export default (scrollWidth: number)=>{
    return <div className="delivery wrapper-component">
        <div className="delivery__title">Правила</div>

        <div className="delivery__item">
            <div className="delivery__item-title">Условия аренды</div>

            <div className="delivery__item-card-box">

                <div className="delivery__item-card">
                    <div className="delivery__item-card-title">Срок аренды</div>
                    <div className="delivery__item-card-text">Минимальный срок аренды велосипеда составляет 1 день. При брони от 5 дней действует скидка 10%</div>
                </div>

                <div className="delivery__item-card">
                    <div className="delivery__item-card-title">Срок аренды</div>
                    <div className="delivery__item-card-text">Минимальный срок аренды велосипеда составляет 1 день. При брони от 5 дней действует скидка 10%</div>
                </div>
                {scrollWidth > 768 ? 
                    <div className="delivery__item-card">
                        <div className="delivery__item-card-title">Срок аренды</div>
                        <div className="delivery__item-card-text">Минимальный срок аренды велосипеда составляет 1 день. При брони от 5 дней действует скидка 10%</div>
                    </div>
                : ''}
            
            </div>
        </div>

        <div className="delivery__item">
            <div className="delivery__item-title">Возмещение ущерба</div>
            <div className="delivery__item-text">Товарищи! постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. <br /><br />Таким образом дальнейшее развитие различных форм деятельности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.</div>
        </div>

    </div>
}