'use client';
import style from './style';
import Input from '@ts/components/helpers/form/input/index';
import { $borders } from '@ts/style/allStyled/colors';
import { InputProps } from '@mui/material';
import React from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

interface TpropsLoc<T extends FieldValues, N> extends React.HtmlHTMLAttributes<HTMLDivElement> {
    title: string;
    input1: {
        name: N;
        type: 'number';
        startText: string;
        endText: string;
        props?: InputProps;
    };
    input2: {
        name: N;
        type: 'number';
        startText: string;
        endText: string;
        props?: InputProps;
    };
    control: Control<T, any>;
    setFn?: (value: any) => void;
}

function select<T extends FieldValues, N extends FieldPath<T>>({
    title,
    input1,
    input2,
    control,
    ...props
}: TpropsLoc<T, N>) {
    const { InputBigBox, InputPreview, InputBoxMain, InputYearContainer, InputYearText, size } =
        style();
    return (
        <InputBigBox {...props}>
            <InputPreview>{title}</InputPreview>
            <InputBoxMain>
                <InputYearContainer
                    style={{ borderRadius: '0', borderRight: `1px solid ${$borders}` }}
                >
                    <InputYearText>{input1.startText}</InputYearText>
                    <Input
                        name={input1.name}
                        control={control}
                        type={input1.type}
                        textCenter
                        style={
                            input1.props?.style
                                ? input1.props?.style
                                : { padding: size.isMobile ? '10px' : '15px' }
                        }
                    />

                    <InputYearText>{input1.endText}</InputYearText>
                </InputYearContainer>

                <InputYearContainer style={{ borderRadius: '0' }}>
                    <InputYearText>{input2.startText}</InputYearText>
                    <Input
                        name={input2.name}
                        control={control}
                        type={input2.type}
                        textCenter
                        style={
                            input2.props?.style
                                ? input2.props?.style
                                : { padding: size.isMobile ? '10px' : '15px' }
                        }
                    />
                    <InputYearText>{input2.endText}</InputYearText>
                </InputYearContainer>
            </InputBoxMain>
        </InputBigBox>
    );
}
export default select;
