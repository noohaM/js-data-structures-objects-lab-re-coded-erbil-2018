// Write your solution in this file!
const driver= {name:'sam'}

function updateDriverWithKeyAndValue(driver, key, value)
{
  let Ndriver = object.assign({},driver,{[key]:value})
  
  return Ndriver;
}