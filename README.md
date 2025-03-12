# MongoDB

## Non-Relational DB

## Relation -> Table

## Rows -> Tuples/Entries

## Columns -> Attributes


Ex:-
irctc_file(1k train infos)
1 train heading to goa => 1k train all

irctc_db(1k train infos)
1 train heading to goa => retrive 1 train only

Data >> json (csv)format >>schemaless


MVC architeture => controllers

>> M -> Modal  (It depicts the structure of mongodb collections)
>> V -> View  (wrt to frontend (reactJs))
>> Controllers (Brain or logical part of a routes)
        >> books.controllers.js
        >> users.controllers.js

>>Schema :- Representation of tables in a database.
        >> Ex:-
            >>id: string
            >>name: string
            >>age : Number
            >>Gender : char || varchar(15) || In varchar you can    explicitly give the size.

>>Modal :-
        >>id:123
        >>name:Mahesh
        >>age:21
        >>Gender:'M'

Foreign Key:
>> Referential Integrity
The foreign key should always present in the table as primary key and both must be same. 
Users Table                         Books Table

issued Book:2(Foreign Key here)      Issued :2(Primary Key) 


### DTO(Data Transfer Object)
var obj1:{
        name
        age
        id 
        geneder
}

var obj2:{
         name
        age
        id 
        geneder
}

The passing of information from one object to another object is DTO.