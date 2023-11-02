import React from 'react'
import { Display } from '../../types/common/display'

export interface IDisplay{ display?: Display }

export interface IContainer extends React.HTMLAttributes<HTMLDivElement>, IDisplay {}