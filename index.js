class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string){
    let arrayToBeJoined = []
    let verboten =  ["and", "but", "a", "for", "an", "of", "at", "the", "by", "from"]
    let split = string.split(" ")
    for (let i = 0; i < split.length; i++){
      if ( i === 0){
        arrayToBeJoined.push(this.capitalize(split[i]))
      }else{
        if(verboten.includes(split[i])){
          arrayToBeJoined.push(split[i])
        }else{
          arrayToBeJoined.push(this.capitalize(split[i]))
        }
      }
    }
    return arrayToBeJoined.join(" ")
  }
}
