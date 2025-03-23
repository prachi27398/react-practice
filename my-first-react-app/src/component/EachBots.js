import React from 'react'

export const EachBots = (props) => {
  return (
    <div>
      <li key={props.bot.id}>{props.bot.id} - {props.bot.botname} - {props.bot.status} <button onClick={()=>props.handleDelete(props.bot.id)}>Delete your Job</button></li>
    </div>
  )
}

