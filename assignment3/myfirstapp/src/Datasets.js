import React from "react";
import { useDataQuery } from '@dhis2/app-runtime'
import { Menu, MenuItem, Table, TableHead, TableBody, TableCell, TableRowHead, TableRow, TableCellHead } from '@dhis2/ui'
import { useState} from "react";
import "./Datasets.css";

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
      const [ showTable, changeShowTable] = useState(false);

        if (error) {
            return <span>ERROR: {error.message}</span>
        }
    
        if (loading) {
            return <span>Loading...</span>
        }

        const handleClick = (s) => {
          changeActiveRow(s);
          changeShowTable(true);
        }

        if (data) {
          console.log("API response:",data)
          if(showTable) {
            return (
              <div className="row">
                <div className="menu">
                <Menu>
                  {data.request0.dataSets.map((dataset) => (
                    <MenuItem onClick={() => handleClick(dataset.displayName)} key={dataset.id} label={dataset.displayName} />
                  ))}
                </Menu>
                </div>
                <div className="table">
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
              </div>   
                
            );
          }else {
            return (
            <div className="menu">
              <Menu>
                {data.request0.dataSets.map((dataset) => (
                  <MenuItem onClick={() => handleClick(dataset.displayName)} key={dataset.id} label={dataset.displayName} />
                ))}
              </Menu>
            </div>
            );
          }
          
        }

}