import React  from 'react';
import { View ,Text , SectionList} from 'react-native';
import Row from "./Row";
import PropTypes from 'prop-types'

const renderItem=({item})=>(
    <Row {...item}/>
  )

 const  renderSectionHeader=({ section })=>(
    <Text>{ section.title }</Text>
  )
  


export default function ContactList( props ) {
    const contactByLetters = props.contacts.reduce( ( obj,contact )=>{
        const firstLetter = contact.name[0].toUpperCase();
        return {
            ...obj,
            [firstLetter]:[...obj[firstLetter] || [],contact]
        }
    },{});
    const sections = Object.keys(contactByLetters).sort().map(x=> { return { title:x,data:contactByLetters[x] }})
  return (
    <SectionList 
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={sections}
    />
  )
}

ContactList.propTypes = {
    contacts:PropTypes.array
}
