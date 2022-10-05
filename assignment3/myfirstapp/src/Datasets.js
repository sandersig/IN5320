import React from "react";
import { useDataQuery } from '@dhis2/app-runtime'
import { Menu, MenuItem, Table, TableHead, TableBody, TableCell, TableRowHead, TableRow, TableCellHead } from '@dhis2/ui'
import { useState} from "react";

const request = {
  request0: {
    resource: "/dataSets",
    params: {
      fields: "id,displayName,created",
      paging: "false"
    }
  }
}

export function Datasets() {
      const { loading, error, data } = useDataQuery(request)
      const [ row, changeActiveRow] = useState("");

        if (error) {
            return <span>ERROR: {error.message}</span>
        }
    
        if (loading) {
            return <span>Loading...</span>
        }

        const handleClick = (s) => {
          changeActiveRow(s);
        }

        if (data) {
          console.log("API response:",data)
          return (
            <div>
              <Menu>
                {data.request0.dataSets.map((dataset) => (
                  <MenuItem onClick={() => handleClick(dataset.displayName)} key={dataset.id} label={dataset.displayName} />
                ))}
              </Menu>
              <Table>
                <TableHead>
                    <TableRowHead>
                        <TableCellHead>Display Name</TableCellHead>
                        <TableCellHead>ID</TableCellHead>
                        <TableCellHead>Creation Date</TableCellHead>
                    </TableRowHead>
                  </TableHead>
                    <TableBody>
                    {data.request0.dataSets.map(dataSets => {
                      if(dataSets.displayName === row) {
                      return (
                      <TableRow key={dataSets.id}>
                        <TableCell>{dataSets.displayName}</TableCell>
                        <TableCell>{dataSets.id}</TableCell>
                        <TableCell>{dataSets.created}</TableCell>
                      </TableRow>
                      )
                      }
                  })}  
                    </TableBody>
              </Table>
            </div>   
              
          );
        }

}