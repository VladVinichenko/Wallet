import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin: 0;
}

* {
  box-sizing: border-box;
  font-family: 'Circe-Regular', sans-serif;
  
  &::before, &::after {
    box-sizing: border-box;
  }
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}


p {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  text-transform: none;
  color: inherit;
  transition: .3s linear;
  cursor: pointer;
}

button {
  background: none;
  border: none;
  outline: none;
}

input {
  outline: none;
  margin: 0;
  border: 0;
  /* Chrome, Safari, Edge, Opera */

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */

  &[type=number] {
    -moz-appearance: textfield;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
    transition: background-color 5000s ease-in-out 0s;
  }
}

ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

textarea {
  outline: none;
}
`
