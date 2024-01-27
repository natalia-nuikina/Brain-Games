#!/usr/bin/env node
import { task, getArrQuestionAnswer } from '../src/games/calc.js';
import workWithUser from '../src/index.js';

workWithUser(task, getArrQuestionAnswer);
