import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './table.css'

const labels = ['25-05-2002', '24-05-2002', '23-05-2002', '22-05-2002', '21-05-2002', '20-05-2002', '19-05-2002', ];

function UK(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '25-05-2002',
        Cases: '22.455.435',
        Cases24h: '+41 ',
        Deaths: '178.880',
        Deaths24h: '0',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '24-05-2002',
        Cases: '22.455.392',
        Cases24h: '+6.538	 ',
        Deaths: '178.880',
        Deaths24h: '+136',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '23-05-2002',
        Cases: '22.448.854',
        Cases24h: '+26.054',
        Deaths: '178.744',
        Deaths24h: '+108',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '22-05-2002',
        Cases: '22.422.800',
        Cases24h: '-1.943.263',
        Deaths: '178.636',
        Deaths24h: '-12.211',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '22-05-2002',
        Cases: '22.422.800',
        Cases24h: '-1.943.263',
        Deaths: '178.636',
        Deaths24h: '-12.211',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '21-05-2002',
        Cases: '24.366.063',
        Cases24h: '+54',
        Deaths: '190.847',
        Deaths24h: '+0',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '20-05-2002',
        Cases: '24.366.009',
        Cases24h: '+1.949.805	',
        Deaths: '190.847',
        Deaths24h: '+12.300	',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '19-05-2002',
        Cases: '22.416.204',
        Cases24h: '+13.812	',
        Deaths: '178.547',
        Deaths24h: '+169	',
        Recovered: '0',
        Recovered24h: '0',
      },
    ],
  };
}


function USA(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '25-05-2002',
        Cases: '	83.501.468',
        Cases24h: '+11 ',
        Deaths: '1.002.726',
        Deaths24h: '0',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '24-05-2002',
        Cases: '83.501.457',
        Cases24h: '+110.870',
        Deaths: '1.002.726',
        Deaths24h: '+349	',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '23-05-2002',
        Cases: '83.390.587',
        Cases24h: '+109.258	',
        Deaths: '1.002.377',
        Deaths24h: '+204	',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '22-05-2002',
        Cases: '83.281.329',
        Cases24h: '+18.309	',
        Deaths: '1.002.173	',
        Deaths24h: '+27	',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '22-05-2002',
        Cases: '83.263.020',
        Cases24h: '+25.428	',
        Deaths: '1.002.146	',
        Deaths24h: '+126	',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '21-05-2002',
        Cases: '83.281.329',
        Cases24h: '+18.309	',
        Deaths: '1.002.173	',
        Deaths24h: '+27	',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '20-05-2002',
        Cases: '83.237.592	',
        Cases24h: '+176.633		',
        Deaths: '1.002.020',
        Deaths24h: '+414		',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '19-05-2002',
        Cases: '83.060.959	',
        Cases24h: '+109.580		',
        Deaths: '1.001.606',
        Deaths24h: '+337		',
        Recovered: '0',
        Recovered24h: '0',
      },
    ],
  };
}

function IND(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '25-05-2002',
        Cases: '22.455.435',
        Cases24h: '+41 ',
        Deaths: '178.880',
        Deaths24h: '0',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '24-05-2002',
        Cases: '22.455.392',
        Cases24h: '+6.538	 ',
        Deaths: '178.880',
        Deaths24h: '+136',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '23-05-2002',
        Cases: '22.448.854',
        Cases24h: '+26.054',
        Deaths: '178.744',
        Deaths24h: '+108',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '22-05-2002',
        Cases: '22.422.800',
        Cases24h: '-1.943.263',
        Deaths: '178.636',
        Deaths24h: '-12.211',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '22-05-2002',
        Cases: '22.422.800',
        Cases24h: '-1.943.263',
        Deaths: '178.636',
        Deaths24h: '-12.211',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '21-05-2002',
        Cases: '24.366.063',
        Cases24h: '+54',
        Deaths: '190.847',
        Deaths24h: '+0',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '20-05-2002',
        Cases: '24.366.009',
        Cases24h: '+1.949.805	',
        Deaths: '190.847',
        Deaths24h: '+12.300	',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '19-05-2002',
        Cases: '22.416.204',
        Cases24h: '+13.812	',
        Deaths: '178.547',
        Deaths24h: '+169	',
        Recovered: '0',
        Recovered24h: '0',
      },
    ],
  };
}

function CHI(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '25-05-2002',
        Cases: '22.455.435',
        Cases24h: '+41 ',
        Deaths: '178.880',
        Deaths24h: '0',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '24-05-2002',
        Cases: '22.455.392',
        Cases24h: '+6.538	 ',
        Deaths: '178.880',
        Deaths24h: '+136',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '23-05-2002',
        Cases: '22.448.854',
        Cases24h: '+26.054',
        Deaths: '178.744',
        Deaths24h: '+108',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '22-05-2002',
        Cases: '22.422.800',
        Cases24h: '-1.943.263',
        Deaths: '178.636',
        Deaths24h: '-12.211',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '22-05-2002',
        Cases: '22.422.800',
        Cases24h: '-1.943.263',
        Deaths: '178.636',
        Deaths24h: '-12.211',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '21-05-2002',
        Cases: '24.366.063',
        Cases24h: '+54',
        Deaths: '190.847',
        Deaths24h: '+0',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '20-05-2002',
        Cases: '24.366.009',
        Cases24h: '+1.949.805	',
        Deaths: '190.847',
        Deaths24h: '+12.300	',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '19-05-2002',
        Cases: '22.416.204',
        Cases24h: '+13.812	',
        Deaths: '178.547',
        Deaths24h: '+169	',
        Recovered: '0',
        Recovered24h: '0',
      },
    ],
  };
}

function ITA(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '25-05-2002',
        Cases: '0',
        Cases24h: '+41 ',
        Deaths: '178.880',
        Deaths24h: '0',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '24-05-2002',
        Cases: '22.455.392',
        Cases24h: '+6.538	 ',
        Deaths: '178.880',
        Deaths24h: '+136',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '23-05-2002',
        Cases: '22.448.854',
        Cases24h: '+26.054',
        Deaths: '178.744',
        Deaths24h: '+108',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '22-05-2002',
        Cases: '22.422.800',
        Cases24h: '-1.943.263',
        Deaths: '178.636',
        Deaths24h: '-12.211',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '22-05-2002',
        Cases: '22.422.800',
        Cases24h: '-1.943.263',
        Deaths: '178.636',
        Deaths24h: '-12.211',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '21-05-2002',
        Cases: '24.366.063',
        Cases24h: '+54',
        Deaths: '190.847',
        Deaths24h: '+0',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '20-05-2002',
        Cases: '24.366.009',
        Cases24h: '+1.949.805	',
        Deaths: '190.847',
        Deaths24h: '+12.300	',
        Recovered: '0',
        Recovered24h: '0',
      },
      {
        date: '19-05-2002',
        Cases: '22.416.204',
        Cases24h: '+13.812	',
        Deaths: '178.547',
        Deaths24h: '+169	',
        Recovered: '0',
        Recovered24h: '0',
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Cases</TableCell>
                    <TableCell>Cases in 24H</TableCell>
                    <TableCell>Deaths</TableCell>
                    <TableCell>Deaths in 24H</TableCell>
                    <TableCell>Recovered</TableCell>
                    <TableCell>Recovered in 24H</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.Cases}</TableCell>
                      <TableCell>{historyRow.Cases24h}</TableCell>
                      <TableCell>{historyRow.Deaths}</TableCell>
                      <TableCell>{historyRow.Deaths24h}</TableCell>
                      <TableCell>{historyRow.Recovered}</TableCell>
                      <TableCell>{historyRow.Recovered24h}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  UK('United Kindom', 22.455, 178.880, 0, 0),
  USA('United States of America', 237, 9.0, 37, 4.3, 4.99),
  IND('India', 262, 16.0, 24, 6.0, 3.79),
  CHI('China', 305, 3.7, 67, 4.3, 2.5),
  ITA('Italy', 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Countries</TableCell>
            <TableCell align="right">Cases</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">Recovered</TableCell>
            <TableCell align="right">Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
