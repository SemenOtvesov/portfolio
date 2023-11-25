import React from 'react';
import Statistics from '@js/components/middleComponents/main/statistics/statistics';
import SelectedStatictics from '@js/components/middleComponents/main/statistics/selectedStatistics/selectedStatistics';
import useAppSelector from '@js/hooks/useAppSelector';

export default () => {
    const userUid = useAppSelector(state => state.userState.userUid);
    return (
        <main className="main">
            {userUid ? (
                <>
                    <Statistics />
                    <SelectedStatictics />
                </>
            ) : (
                <div className="main__err">Войдите пожалуйста в аккаунт</div>
            )}
        </main>
    );
};
