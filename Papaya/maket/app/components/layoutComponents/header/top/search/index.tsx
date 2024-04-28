'use client';
import style from './style';
import React from 'react';

export default () => {
    const { SearchBox, Search, SearchIcon, SearchInput, SearchButton } = style();
    return (
        <SearchBox>
            <Search>
                <SearchIcon className="icon-Search"></SearchIcon>
                <SearchInput placeholder="Explore"></SearchInput>
                <SearchButton>
                    <div className="icon-Microphone"></div>
                </SearchButton>
            </Search>
        </SearchBox>
    );
};
