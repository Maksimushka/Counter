import React from 'react';
import {RootStateReduxType} from './store';

interface IRootState extends RootStateReduxType{
    
}

export const selectState = (state: IRootState) => state