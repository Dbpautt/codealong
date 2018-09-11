'use strict'

const options = ['rock','paper','scissors'];

const getRandomOption = () => {
  const number = Math.floor(Math.random()*3)
  return options[number];
}

module.exports = {
  getRandomOption,
  options
};