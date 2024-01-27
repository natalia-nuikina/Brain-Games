#!/usr/bin/env node
import { task, getArrQuestionAnswer } from '../src/games/prime.js';
import workWithUser from '../src/index.js';

workWithUser(task, getArrQuestionAnswer);
