import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection, query, orderBy } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAUa8ASqRSE4H43_o2QfZtnArjHDVIrJJE",
    authDomain: "football-63302.firebaseapp.com",
    projectId: "football-63302",
    storageBucket: "football-63302.appspot.com",
    messagingSenderId: "774176377887",
    appId: "1:774176377887:web:77edbd800ff203abe6d92a",
    measurementId: "G-N5RNS6X4E0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface Data {
    POS: number;
    CLUB: string;
    P: number;
    W: number;
    D: number;
    L: number;
    GF: number;
    GA: number;
    GD: string;
    PTS: number;
}

interface ColumnData {
    dataKey: keyof Data;
    label: string;
    numeric?: boolean;
    width: number;
}

const columns: ColumnData[] = [
    { width: 50, label: 'POS', dataKey: 'POS', numeric: true },
    { width: 200, label: 'CLUB', dataKey: 'CLUB' },
    { width: 50, label: 'P', dataKey: 'P', numeric: true },
    { width: 50, label: 'W', dataKey: 'W', numeric: true },
    { width: 50, label: 'D', dataKey: 'D', numeric: true },
    { width: 50, label: 'L', dataKey: 'L', numeric: true },
    { width: 50, label: 'GF', dataKey: 'GF', numeric: true },
    { width: 50, label: 'GA', dataKey: 'GA', numeric: true },
    { width: 50, label: 'GD', dataKey: 'GD' },
    { width: 50, label: 'PTS', dataKey: 'PTS', numeric: true },
];

const VirtuosoTableComponents: TableComponents<Data> = {
    Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableHead {...props} ref={ref} />
    )),
    TableRow,
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableBody {...props} ref={ref} />
    )),
};

function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align={column.numeric || false ? 'right' : 'left'}
                    style={{ width: column.width }}
                    sx={{ backgroundColor: 'background.paper' }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function rowContent(_index: number, row: Data) {
    return (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    align={column.numeric || false ? 'right' : 'left'}
                >
                    {row[column.dataKey]}
                </TableCell>
            ))}
        </React.Fragment>
    );
}

export default function ReactVirtualizedTable() {
    const [value, loading, error] = useCollection(
        query(collection(db, '2022C'), orderBy('POS')),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const rows: Data[] = value?.docs.map(doc => doc.data() as Data) || [];

    return (
        <Paper style={{ height: 400, width: '100%' }}>
            <TableVirtuoso
                data={rows}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
            />
        </Paper>
    );
}
