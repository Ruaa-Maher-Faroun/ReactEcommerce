import React from 'react'
import { faCar, faCircleChevronDown, faHouse, faLaptop, faListCheck, faPerson, faPersonDress, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

export default function GetIcon() {
    const icons = {women: faPersonDress,men:faPerson,electronices: faLaptop, beauty: faWandMagicSparkles,automotive:faCar
        ,home:faHouse,else:faCircleChevronDown};
  return icons;
}
