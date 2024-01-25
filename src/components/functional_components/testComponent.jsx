import React from "react";
import TestClassComp from "../class_components/Tesrclasscmpnt";
import FooterContent from "../class_components/FooterComponent";
import EducationComponent from "../class_components/education";
/*syntax
function <function name>(){
    return (<tags>)
}
upon the completion of function , need to export it if it wanted to be use it outside the respective file
for export
export default <Component name>
if exported component need to be used in another file then you need to import it.
for import
import <Component name> from <path>*/
function TestComponent(){
    return(
      <>
        <h1>Portfolio</h1>
        
    </>
    )
}
export default TestComponent
/*if you want to use the component/declare the component either both in
your functional component or class component need to use pascal casing*/
/*
function add(a,b){
    return a+b;
}
console.log(add(5,10))
*/