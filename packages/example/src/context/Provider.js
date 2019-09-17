import React, { 
  useRef,
  useState,
 } from 'react'
import Context from './Context'

const fetch = ({
  endpoint,
  verb,
}) => {
  return new new Promise((resolve, reject) => {
    resolve({
      "question": "Favourite programming language?",
      "published_at": "2015-08-05T08:40:51.620Z",
    })
  });
}

export default ({
  children,
}) => {
  const resoueces = useState({})
  const register = ({
    endpoint,
    verb,
  }) => {
    const resourceKey = `${endpoint}:${verb}`
    // return an API caller
    return (variables) => {
      fetch(variables).then(res => {
        // update resources by resourceKey
     
      }).catch(err => {

      })
    }
  }

  const providerValue = {
    register,
    resoueces,
  }

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>
  )
}