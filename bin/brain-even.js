#!/usr/bin/env node
import { task, getArrQuestionAnswer } from '../src/games/even.js';
import workWithUser from '../src/index.js';

workWithUser(task, getArrQuestionAnswer);
