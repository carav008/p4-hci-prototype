import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(connections: any[], searchText: string): any[] {
    if (!connections) return [];
    if (!searchText) return connections
    console.log(connections[0]["interest "])

    //Simple filtering by name for now, would be interest
    searchText = searchText.toLowerCase();
    return connections.filter(connection =>{
      if (connection.bio === null){
        console.log("that was equal to null...changing it something else")
        connection.bio = " "
        console.log(connection.bio)
        return connection.bio.indexOf(searchText) !== -1;
      }
      return connection.bio.indexOf(searchText) !== -1;
    })
  }
}
