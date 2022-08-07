import { Command } from '../interfaces/Command';
import { Hello } from './slash/Hello';
import { CreateStudy } from './slash/CreateStudy';
import { InviteStudy } from './context-menu/InviteStudy';

export const Commands: Command[] = [Hello, CreateStudy, InviteStudy];
