import React from "react";
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader, Table, TableHead, TableBody, TableCell, TableRowHead, TableRow, TableCellHead } from '@dhis2/ui'

const dataQuery = {
  dataSets: {
      resource: 'dataSets/aLpVgfXiz0f',
      params: {
          fields: [
              'name',
              'id',
              'dataSetElements[dataElement[id, displayName]',
          ],
      },
  },
  dataValueSets: {
      resource: 'dataValueSets',
      params: {
          orgUnit: 'KiheEgvUZ0i',
          dataSet: 'aLpVgfXiz0f',
          period: '2020',
      },
  },
}

function mergeData(data) {
  return data.dataSets.dataSetElements.map(d => {
      let matchedValue = data.dataValueSets.dataValues.find(dataValues => {
          if (dataValues.dataElement == d.dataElement.id) {
              return true
          }
      })

      return {
          displayName: d.dataElement.displayName,
          id: d.dataElement.id,
          value: matchedValue.value,
      }
  })
}

export function Browse() {
  const { loading, error, data } = useDataQuery(dataQuery)
  if (error) {
      return <span>ERROR: {error.message}</span>
  }

  if (loading) {
      return <CircularLoader large />
  }

  if (data) {
      let mergedData = mergeData(data)
      console.log(mergedData)
      return (
          <Table>
              <TableHead>
                  <TableRowHead>
                      <TableCellHead>Display Name</TableCellHead>
                      <TableCellHead>Value</TableCellHead>
                      <TableCellHead>ID</TableCellHead>
                  </TableRowHead>
                </TableHead>
                <TableBody>
                  {mergedData.map(row => {
                    return (
                      <TableRow key={row.id}>
                        <TableCell>{row.displayName}</TableCell>
                        <TableCell>{row.value}</TableCell>
                        <TableCell>{row.id}</TableCell>
                      </TableRow>
                      )
                  })}     
                </TableBody>
            </Table>

      );
  }
}
