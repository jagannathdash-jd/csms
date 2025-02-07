// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   Typography,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Collapse,
//   IconButton,
//   Grid,
//   TablePagination,
// } from '@mui/material';
// import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
// import CircularProgress from '@mui/material/CircularProgress';
// import api from "src/api";
// import { useSelector } from 'react-redux';

// const Report = () => {
//   const userInfo = useSelector((state) => state.userInfo);
//   const [whitelevel_id] = useState(userInfo.whitelevel_id);
//   const [reportData, setReportData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openRows, setOpenRows] = useState({});
//   const [currentPage, setCurrentPage] = useState(0);
//   const [pageCount, setPageCount] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await api.post('item/allitems/', {
//           whitelevel_id,
//           page: currentPage + 1,
//         });
//         setReportData(response.data.results || []);
//         setPageCount(Math.ceil(response.data.count / 5));
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching report data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [currentPage, whitelevel_id]);

//   const toggleRow = (index) => {
//     setOpenRows((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   if (loading) {
//     return (
//       <Container maxWidth="lg" className="flex justify-center items-center h-screen">
//         <CircularProgress />
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="lg">
//       <Typography variant="h4" gutterBottom>
//         Item Report
//       </Typography>

//       <TableContainer component={Paper}>
//         <Table stickyHeader sx={{ minWidth: 650 }} aria-label="nested table">
//           <TableHead>
//             <TableRow>
//               <TableCell />
//               <TableCell>Issuance ID</TableCell>
//               <TableCell>Issuance Date</TableCell>
//               <TableCell>About the Issuance</TableCell>
//               <TableCell>White Level ID</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {Array.isArray(reportData) && reportData.length > 0 ? (
//               reportData.map((item, index) => (
//                 <React.Fragment key={index}>
//                   <TableRow>
//                     <TableCell>
//                       <IconButton
//                         size="small"
//                         onClick={() => toggleRow(index)}
//                       >
//                         {openRows[index] ? (
//                           <KeyboardArrowUp />
//                         ) : (
//                           <KeyboardArrowDown />
//                         )}
//                       </IconButton>
//                     </TableCell>
//                     <TableCell>{item.issuance.issuance_id}</TableCell>
//                     <TableCell>{item.issuance.issuance_date}</TableCell>
//                     <TableCell>{item.issuance.about_the_newissuance || 'N/A'}</TableCell>
//                     <TableCell>{item.issuance.white_level_id}</TableCell>
//                   </TableRow>

//                   <TableRow>
//                     <TableCell colSpan={5} style={{ paddingBottom: 0, paddingTop: 0 }}>
//                       <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
//                         <Paper elevation={1} sx={{ margin: 2, padding: 2 }}>
//                           {/* Issued Items */}
//                           <Typography variant="h6" gutterBottom>
//                             Issued Items
//                           </Typography>
//                           <Table size="small" aria-label="issued items">
//                             <TableHead>
//                               <TableRow>
//                                 <TableCell>Item Name</TableCell>
//                                 <TableCell>Item Type ID</TableCell>
//                                 <TableCell>Expiry Date</TableCell>
//                               </TableRow>
//                             </TableHead>
//                             <TableBody>
//                               {item.issued_things.length > 0 ? (
//                                 item.issued_things.map((thing, i) => (
//                                   <TableRow key={i}>
//                                     <TableCell>{thing.item_name}</TableCell>
//                                     <TableCell>{thing.item_type_id}</TableCell>
//                                     <TableCell>{thing.expiry_date}</TableCell>
//                                   </TableRow>
//                                 ))
//                               ) : (
//                                 <TableRow>
//                                   <TableCell colSpan={3}>No Items Issued</TableCell>
//                                 </TableRow>
//                               )}
//                             </TableBody>
//                           </Table>

//                           {/* Issued Employees */}
//                           <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
//                             Issued Employees
//                           </Typography>
//                           <Table size="small" aria-label="issued employees">
//                             <TableHead>
//                               <TableRow>
//                                 <TableCell>Employee ID</TableCell>
//                                 <TableCell>Employee Name</TableCell>
//                               </TableRow>
//                             </TableHead>
//                             <TableBody>
//                               {item.issued_to_employees.length > 0 ? (
//                                 item.issued_to_employees.map((employee, i) => (
//                                   <TableRow key={i}>
//                                     <TableCell>{employee.employee_id}</TableCell>
//                                     <TableCell>{employee.employee_name}</TableCell>
//                                   </TableRow>
//                                 ))
//                               ) : (
//                                 <TableRow>
//                                   <TableCell colSpan={2}>No Employees Issued</TableCell>
//                                 </TableRow>
//                               )}
//                             </TableBody>
//                           </Table>
//                         </Paper>
//                       </Collapse>
//                     </TableCell>
//                   </TableRow>
//                 </React.Fragment>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={5}>No data available</TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Grid container justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
//         <TablePagination
//           component="div"
//           count={pageCount * 5}
//           page={currentPage}
//           onPageChange={(event, newPage) => setCurrentPage(newPage)}
//           rowsPerPage={5}
//           rowsPerPageOptions={[]}
//         />
//       </Grid>
//     </Container>
//   );
// };

// export default Report;





import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  IconButton,
  CircularProgress,
  Button,
  TablePagination,
  Box,
  TextField
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp, Download } from '@mui/icons-material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useSelector } from 'react-redux';
import api from 'src/api';

const Report = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const [whitelevel_id] = useState(userInfo?.whitelevel_id || '');
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openRows, setOpenRows] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.post('item/allitems/', { whitelevel_id });
        setReportData(response.data || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching report data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [whitelevel_id]);

  const toggleRow = (index) => {
    setOpenRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const downloadRowPDF = async (item) => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const content = document.createElement('div');
    content.style.width = '210mm';
    content.style.fontSize = '14px';

    // Create the HTML content dynamically
    content.innerHTML = `
      <h2 style="margin-left:30%">NewIssuance Report</h2>
      <p><strong>Issuance ID:</strong> ${item.issuance.issuance_id}</p>
      <p><strong>Issuance Date:</strong> ${item.issuance.issuance_date}</p>
      
      <h3>Employee</h3>
      ${
        item.issued_to_employees.length > 0
          ? `<ul>${item.issued_to_employees
              .map(
                (trainer) =>
                  `<li>${trainer.employee_name} (Employee ID: ${trainer.employee})</li>`
              )
              .join('')}</ul>`
          : '<p>No NewIssuance Assigned</p>'
      }
      <p><strong>About the NewIssuance:</strong> ${item.issuance.about_the_newissuance || 'N/A'}</p>
      ${
        item.issuance.newIssuance_image
          ? `<img src="data:image/jpeg;base64,${item.issuance.newIssuance_image}" style="width:60%; max-height:200px; margin-bottom:20px;" />`
          : ''
      }
    `;

    document.body.appendChild(content);

    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 190; // Width of the PDF content
    const pageHeight = 297; // A4 page height
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 10;

    doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    document.body.removeChild(content);
    doc.save(`NewIssuance_Report_${item.issuance.issuance_id}.pdf`);
  };

  const downloadallPDF = async () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const margin = 10;
    let yOffset = margin; // Starting Y offset
    const fontSize = 10; // Reduced font size for better fitting

    doc.setFontSize(fontSize);

    reportData.forEach((item, index) => {
      // Add header for each report
      doc.text(`Issuance ID: ${item.issuance.issuance_id}`, margin, yOffset);
      yOffset += 7;
      doc.text(`Issuance Date: ${item.issuance.issuance_date}`, margin, yOffset);
      yOffset += 7;
      doc.text(`About the NewIssuance: ${item.issuance.about_the_newissuance  || 'N/A'}`, margin, yOffset);
      yOffset += 7;

      // Add Trainers section
      doc.text("Employee:", margin, yOffset);
      yOffset += 7;
      item.issued_to_employees.forEach((trainer, i) => {
        doc.text(`- ${trainer.employee_name} (ID: ${trainer.employee})`, margin, yOffset);
        yOffset += 7;
      });

      // Add the image if it exists
      if (item.issuance.newIssuance_image) {
        const imgData = `data:image/jpeg;base64,${item.issuance.newIssuance_image}`;
        const imgWidth = 160; // Reduced image width
        const imgHeight = 100; // Reduced image height
        const imageYPos = yOffset;
        doc.addImage(imgData, 'JPEG', margin, imageYPos, imgWidth, imgHeight);
        yOffset += imgHeight + 7; // Move the Y position after the image
      }

      // Check if the content exceeds the page height, then add a new page
      if (yOffset > 270) { // A4 size page height (297mm - 10mm margin) ~ 287mm total content
        doc.addPage();
        yOffset = margin; // Reset Y offset to top for the next page
      } else {
        // Add some spacing before the next record
        yOffset += 10;
      }
    });

    // Save the PDF after all records are added
    doc.save('NewIssuance_Report.pdf');
  };

  // Pagination handler
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  // Filter report data based on the search query
  const filteredData = reportData.filter((item) => {
    return (
      item.issuance.issuance_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.issuance.issuance_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.issuance.about_the_newissuance.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Paginate the filtered report data
  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  if (loading) {
    return (
      <Container maxWidth="lg" className="flex justify-center items-center h-screen">
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Item Report
      </Typography>

      <Box display="flex" justifyContent="flex-end" mb={2} sx={{gap:'10px'}}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: 300 }}
        />
         <Button
        variant="contained"
        color="primary"
        onClick={downloadallPDF}
        // style={{ marginBottom: 0 }}
      >
        Download PDF
      </Button>
      </Box>

     

      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="nested table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Issuance ID</TableCell>
              <TableCell>Issuance Date</TableCell>
              <TableCell>About the Issuance</TableCell>
              <TableCell>Issuance Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={() => toggleRow(index)}
                      >
                        {openRows[index] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                      </IconButton>
                    </TableCell>
                    <TableCell>{item.issuance.issuance_id}</TableCell>
                    <TableCell>{item.issuance.issuance_date}</TableCell>
                    <TableCell>{item.issuance.about_the_newissuance || 'N/A'}</TableCell>
                   <TableCell >
                      <img
                      src={`data:image/png;base64,${item.issuance.newIssuance_image}`}
                      alt="Image Not Found "
                      style={{
                     width: '80px',
                     height: '80px',
                     objectFit: 'cover',
                     borderRadius: '5px',
                     cursor: 'pointer',
                     }}
                                            
                      />
                     </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => downloadRowPDF(item)}
                      >
                        <Download />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={5}>
                      <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                        <Paper>
                          <Table size="small">
                            <TableBody>
                              {item.issued_to_employees.length > 0 ? (
                                item.issued_to_employees.map((employee, i) => (
                                  <TableRow key={i}>
                                    <TableCell>{employee.employee}</TableCell>
                                    <TableCell>{employee.employee_name}</TableCell>
                                  </TableRow>
                                ))
                              ) : (
                                <TableRow>
                                  <TableCell colSpan={2}>No Employees Assigned</TableCell>
                                </TableRow>
                              )}
                             
                              
                            </TableBody>
                          </Table>
                        </Paper>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No Data Available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default Report;

// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   Button,
//   CircularProgress,
//   Pagination,
// } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { jsPDF } from "jspdf";
// import { useSelector } from "react-redux";
// import api from "src/api";

// const Report = () => {
//   const userInfo = useSelector((state) => state.userInfo);
//   const [whitelevel_id] = useState(userInfo?.whitelevel_id || "");
//   const [reportData, setReportData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1); // Track current page
//   const [rowsPerPage, setRowsPerPage] = useState(10); // Rows per page

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await api.post("item/allitems/", { whitelevel_id });
//         setReportData(response.data || []);
//       } catch (error) {
//         console.error("Error fetching report data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [whitelevel_id]);

//   const handleChangePage = (event, value) => {
//     setPage(value);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(Number(event.target.value));
//     setPage(1); // Reset to first page when changing rows per page
//   };

//   const downloadRowPDF = async (item) => {
//     const doc = new jsPDF("p", "mm", "a4");
//     doc.text(`Issuance ID: ${item.issuance.issuance_id}`, 10, 10);
//     doc.text(`Issuance Date: ${item.issuance.issuance_date}`, 10, 20);
//     doc.text(
//       `About the Issuance: ${item.issuance.about_the_newissuance || "N/A"}`,
//       10,
//       30
//     );

//     // Add image if available
//     if (item.issuance.newIssuance_image) {
//       const imgData = `data:image/jpeg;base64,${item.issuance.newIssuance_image}`;
//       doc.addImage(imgData, "JPEG", 10, 40, 150, 100);
//     }

//     doc.save(`NewIssuance_Report_${item.issuance.issuance_id}.pdf`);
//   };

//   const downloadAllPDF = async () => {
//     const doc = new jsPDF("p", "mm", "a4");
//     let yOffset = 10;

//     reportData.forEach((item) => {
//       doc.text(`Issuance ID: ${item.issuance.issuance_id}`, 10, yOffset);
//       yOffset += 10;
//       doc.text(`Issuance Date: ${item.issuance.issuance_date}`, 10, yOffset);
//       yOffset += 10;
//       doc.text(
//         `About the Issuance: ${item.issuance.about_the_newissuance || "N/A"}`,
//         10,
//         yOffset
//       );
//       yOffset += 10;

//       // Add image if available
//       if (item.issuance.newIssuance_image) {
//         const imgData = `data:image/jpeg;base64,${item.issuance.newIssuance_image}`;
//         doc.addImage(imgData, "JPEG", 10, yOffset, 150, 100);
//         yOffset += 110;
//       }

//       if (yOffset > 280) {
//         doc.addPage();
//         yOffset = 10;
//       }
//     });

//     doc.save("NewIssuance_Report.pdf");
//   };

//   const columns = [
//     { field: "issuance_id", headerName: "Issuance ID", width: 150 },
//     { field: "issuance_date", headerName: "Issuance Date", width: 150 },
//     {
//       field: "about_the_newissuance",
//       headerName: "About the Issuance",
//       width: 250,
//       valueGetter: (params) => params?.row?.issuance?.about_the_newissuance || "N/A",
//     },
//     {
//       field: "action",
//       headerName: "Actions",
//       width: 150,
//       sortable: false,
//       renderCell: (params) => (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => downloadRowPDF(params.row)}
//         >
//           Download PDF
//         </Button>
//       ),
//     },
//   ];

//   const rows = reportData.map((item, index) => ({
//     id: index,
//     issuance_id: item.issuance?.issuance_id || "N/A",
//     issuance_date: item.issuance?.issuance_date || "N/A",
//     issuance: item.issuance || {},
//     issued_to_employees: item.issued_to_employees || [],
//     issued_things: item.issued_things || [],
//   }));

//   if (loading) {
//     return (
//       <Container
//         maxWidth="lg"
//         className="flex justify-center items-center h-screen"
//       >
//         <CircularProgress />
//       </Container>
//     );
//   }

//   // Implement pagination logic
//   const startIndex = (page - 1) * rowsPerPage;
//   const paginatedRows = rows.slice(startIndex, startIndex + rowsPerPage);

//   return (
//     <Container maxWidth="lg">
//       <Typography variant="h4" gutterBottom>
//         Item Report
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={downloadAllPDF}
//         style={{ marginBottom: 16 }}
//       >
//         Download All PDF
//       </Button>

//       <div style={{ height: 350, width: "100%" }}>
//         <DataGrid
//           rows={paginatedRows}
//           columns={columns}
//           pageSize={rowsPerPage}
//         //   rowsPerPageOptions={[5, 10, 20]}
//           checkboxSelection
//           disableSelectionOnClick
//         />
        
//       </div>

      
//     </Container>
//   );
// };

// export default Report;
