

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
//   IconButton,
//   CircularProgress,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Button,
// } from '@mui/material';
// import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
// import api from "src/api";
// import { useSelector } from 'react-redux';

// const Report = () => {
//   const userInfo = useSelector((state) => state.userInfo);
//   const [whitelevel_id, setWhitelevel_id] = useState(userInfo.whitelevel_id);
//   const [reportData, setReportData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openRows, setOpenRows] = useState({});
//   const [openImageDialog, setOpenImageDialog] = useState(false);
//   const [currentImage, setCurrentImage] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await api.post('training/alltrainings/', {
//           whitelevel_id: whitelevel_id,
//         });

//         console.log('API Response:', response.data);
//         setReportData(response.data || []);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching report data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [whitelevel_id]);

//   const toggleRow = (index) => {
//     setOpenRows((prev) => ({
//       ...prev,
//       [index]: !prev[index], // Toggle collapse state for the clicked row index
//     }));
//   };

//   const handleImageDialogOpen = (image) => {
//     setCurrentImage(image);
//     setOpenImageDialog(true);
//   };

//   const handleImageDialogClose = () => {
//     setOpenImageDialog(false);
//   };

//   if (loading) {
//     return <CircularProgress />;
//   }

//   return (
//     <Container sx={{ width: '100%', maxWidth: 'none' }}>
//       <Typography variant="h4" gutterBottom>
//         Training Report
//       </Typography>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 900 }} aria-label="nested table">
//           <TableHead>
//             <TableRow>
//               <TableCell />
//               <TableCell>Training ID</TableCell>
//               <TableCell>Training Date</TableCell>
//               <TableCell>Training Type</TableCell>
//               <TableCell>About the Training</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {Array.isArray(reportData) && reportData.length > 0 ? (
//               reportData.map((item, index) => (
//                 <React.Fragment key={index}>
//                   {/* Parent Row */}
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
//                     <TableCell>{item.training_id}</TableCell>
//                     <TableCell>{item.training_date}</TableCell>
//                     <TableCell>{item.training_type}</TableCell>
//                     <TableCell>{item.about_the_training || 'N/A'}</TableCell>
//                   </TableRow>

//                   {/* Collapsible Nested Rows */}
//                   {openRows[index] && (
//                     <TableRow>
//                       <TableCell
//                         style={{ paddingBottom: 0, paddingTop: 0 }}
//                         colSpan={5}
//                       >
//                         <Paper elevation={1} sx={{ margin: 2, padding: 2 }}>
//                           {/* Image Section */}
//                           {item.training_image && (
//                             <div style={{ textAlign: 'center' }}>
//                               <img
//                                 src={`data:image/jpeg;base64,${item.training_image}`}
//                                 alt="Training"
//                                 style={{
//                                   maxWidth: '100%',
//                                   maxHeight: '400px',
//                                   cursor: 'pointer',
//                                 }}
//                                 onClick={() => handleImageDialogOpen(item.training_image)}
//                               />
//                             </div>
//                           )}

//                           {/* Trainers Section */}
//                           <Typography variant="h6" gutterBottom>
//                             Trainers
//                           </Typography>
//                           <Table size="small" aria-label="trainers">
//                             <TableHead>
//                               <TableRow>
//                                 <TableCell>Trainer Name</TableCell>
//                                 <TableCell>Employee ID</TableCell>
//                               </TableRow>
//                             </TableHead>
//                             <TableBody>
//                               {item.trainers.length > 0 ? (
//                                 item.trainers.map((trainer, i) => (
//                                   <TableRow key={i}>
//                                     <TableCell>{trainer.trainer_name}</TableCell>
//                                     <TableCell>{trainer.employee_id}</TableCell>
//                                   </TableRow>
//                                 ))
//                               ) : (
//                                 <TableRow>
//                                   <TableCell colSpan={2}>No Trainers Assigned</TableCell>
//                                 </TableRow>
//                               )}
//                             </TableBody>
//                           </Table>

//                           {/* Trainees Section */}
//                           <Typography variant="h6" gutterBottom>
//                             Trainees
//                           </Typography>
//                           <Table size="small" aria-label="trainees">
//                             <TableHead>
//                               <TableRow>
//                                 <TableCell>Trainee Name</TableCell>
//                                 <TableCell>Employee ID</TableCell>
//                               </TableRow>
//                             </TableHead>
//                             <TableBody>
//                               {item.trainees.length > 0 ? (
//                                 item.trainees.map((trainee, i) => (
//                                   <TableRow key={i}>
//                                     <TableCell>{trainee.trainee_name}</TableCell>
//                                     <TableCell>{trainee.employee_id}</TableCell>
//                                   </TableRow>
//                                 ))
//                               ) : (
//                                 <TableRow>
//                                   <TableCell colSpan={2}>No Trainees Assigned</TableCell>
//                                 </TableRow>
//                               )}
//                             </TableBody>
//                           </Table>
//                         </Paper>
//                       </TableCell>
//                     </TableRow>
//                   )}
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

//       {/* Image Dialog */}
//       <Dialog open={openImageDialog} onClose={handleImageDialogClose} maxWidth="md">
//         <DialogTitle>Training Image</DialogTitle>
//         <DialogContent>
//           <img
//             src={`data:image/jpeg;base64,${currentImage}`}
//             alt="Training"
//             style={{
//               width: '100%',
//               height: 'auto',
//             }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleImageDialogClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
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
  IconButton,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TablePagination,
  Box,
  TextField
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp, Download } from '@mui/icons-material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import api from 'src/api';
import { useSelector } from 'react-redux';

const Report = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const [whitelevel_id] = useState(userInfo.whitelevel_id);
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openRows, setOpenRows] = useState({});
  const [openImageDialog, setOpenImageDialog] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Pagination state
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.post('training/alltrainings/', {
          whitelevel_id: whitelevel_id,
        });
        setReportData(response.data || []);
      
        setLoading(false);
      } catch (error) {
        console.error('Error fetching report data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [whitelevel_id]);

  // Filter report data based on the search query
  const filteredData = reportData.filter((item) => {
    return (
      item.training_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.training_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.training_type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Paginate the filtered report data
  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
  

  const toggleRow = (index) => {
    setOpenRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleImageDialogOpen = (image) => {
    setCurrentImage(image);
    setOpenImageDialog(true);
  };

  const handleImageDialogClose = () => {
    setOpenImageDialog(false);
  };

  const downloadRowPDF = async (item) => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const content = document.createElement('div');
    content.style.width = '110mm';
    content.style.fontSize = '14px';

    // Create the HTML content dynamically
    content.innerHTML = `
      <h2 style="margin-left:30%">Training Report</h2>
      <p><strong>Training ID:</strong> ${item.training_id}</p>
      <p><strong>Training Date:</strong> ${item.training_date}</p>
      <p><strong>Training Type:</strong> ${item.training_type}</p>
      <p><strong>About the Training:</strong> ${item.about_the_training || 'N/A'}</p>
      ${
        item.training_image
          ? `<img src="data:image/jpeg;base64,${item.training_image}" style="width:100%; max-height:300px; margin-bottom:20px;" />`
          : ''
      }
      <h3>Trainers</h3>
      ${
        item.trainers.length > 0
          ? `<ul>${item.trainers
              .map(
                (trainer) =>
                  `<li>${trainer.trainer_name} (Employee ID: ${trainer.employee_id})</li>`
              )
              .join('')}</ul>`
          : '<p>No Trainers Assigned</p>'
      }
      <h3>Trainees</h3>
      ${
        item.trainees.length > 0
          ? `<ul>${item.trainees
              .map(
                (trainee) =>
                  `<li>${trainee.trainee_name} (Employee ID: ${trainee.employee_id})</li>`
              )
              .join('')}</ul>`
          : '<p>No Trainees Assigned</p>'
      }
    `;

    document.body.appendChild(content);

    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 100; // Width of the PDF content
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
    doc.save(`Training_Report_${item.training_id}.pdf`);
  };

  const downloadallPDF = async () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const margin = 10;
    let yOffset = margin; // Starting Y offset
    const fontSize = 10; // Reduced font size for better fitting

    doc.setFontSize(fontSize);

    reportData.forEach((item, index) => {
      // Add header for each report
      doc.text(`Training ID: ${item.training_id}`, margin, yOffset);
      yOffset += 7;
      doc.text(`Training Date: ${item.training_date}`, margin, yOffset);
      yOffset += 7;
      doc.text(`Training Type: ${item.training_type}`, margin, yOffset);
      yOffset += 7;
      doc.text(`About the Training: ${item.about_the_training || 'N/A'}`, margin, yOffset);
      yOffset += 7;

      // Add Trainers section
      doc.text("Trainers:", margin, yOffset);
      yOffset += 7;
      item.trainers.forEach((trainer, i) => {
        doc.text(`- ${trainer.trainer_name} (ID: ${trainer.employee_id})`, margin, yOffset);
        yOffset += 7;
      });

      // Add Trainees section
      doc.text("Trainees:", margin, yOffset);
      yOffset += 7;
      item.trainees.forEach((trainee, i) => {
        doc.text(`- ${trainee.trainee_name} (ID: ${trainee.employee_id})`, margin, yOffset);
        yOffset += 7;
      });

      // Add the image if it exists
      if (item.training_image) {
        const imgData = `data:image/jpeg;base64,${item.training_image}`;
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
    doc.save('Training_Report.pdf');
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container sx={{ width: '100%', maxWidth: 'none' }}>
      <Typography variant="h4" gutterBottom>
        Training Report
      </Typography>
      <Box display="flex" justifyContent="flex-end" mb={2} sx={{gap:'10px'}}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: 16 }}
        sx={{ width: 300 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={downloadallPDF}
        style={{ marginBottom: 16 }}
      >
        Download PDF
      </Button>
      </Box>
      

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }} aria-label="nested table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Training ID</TableCell>
              <TableCell>Training Date</TableCell>
              <TableCell>Training Type</TableCell>
              <TableCell>About the Training</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
              <React.Fragment key={index}>
                {/* Parent Row 
                <TableRow>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => toggleRow(index)}
                    >
                      {openRows[index] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                  </TableCell>
                  <TableCell>{item.training_id}</TableCell>
                  <TableCell>{item.training_date}</TableCell>
                  <TableCell>{item.training_type}</TableCell>
                  <TableCell>{item.about_the_training || 'N/A'}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => downloadRowPDF(item)}
                    >
                      <Download /> Download
                    </Button>
                  </TableCell>
                </TableRow>

                {/* Nested Row - Toggle View 
                {openRows[index] && (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <div>
                        <Typography variant="body2">Trainers:</Typography>
                        {item.trainers.length > 0 ? (
                          <ul>
                            {item.trainers.map((trainer, trainerIndex) => (
                              <li key={trainerIndex}>{trainer.trainer_name}</li>
                            ))}
                          </ul>
                        ) : (
                          <Typography>No Trainers Assigned</Typography>
                        )}
                      </div>
                      <div>
                        <Typography variant="body2">Trainees:</Typography>
                        {item.trainees.length > 0 ? (
                          <ul>
                            {item.trainees.map((trainee, traineeIndex) => (
                              <li key={traineeIndex}>{trainee.trainee_name}</li>
                            ))}
                          </ul>
                        ) : (
                          <Typography>No Trainees Assigned</Typography>
                        )}
                      </div>
                      {item.training_image && (
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleImageDialogOpen(item.training_image)}
                         
                        >
                          View Image
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody> */}
           <TableBody>
            {paginatedData.map((item, index) => (
              <React.Fragment key={index}>
              {/* {/* Parent Row  */}
              <TableRow>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => toggleRow(index)}
                  >
                    {openRows[index] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </TableCell>
                <TableCell>{item.training_id}</TableCell>
                <TableCell>{item.training_date}</TableCell>
                <TableCell>{item.training_type}</TableCell>
                <TableCell>{item.about_the_training || 'N/A'}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => downloadRowPDF(item)}
                  >
                    <Download /> Download
                  </Button>
                </TableCell>
              </TableRow>

              {/* {/* Nested Row - Toggle View  */}
              {openRows[index] && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <div>
                      <Typography variant="body2">Trainers:</Typography>
                      {item.trainers.length > 0 ? (
                        <ul>
                          {item.trainers.map((trainer, trainerIndex) => (
                            <li key={trainerIndex}>{trainer.trainer_name}</li>
                          ))}
                        </ul>
                      ) : (
                        <Typography>No Trainers Assigned</Typography>
                      )}
                    </div>
                    <div>
                      <Typography variant="body2">Trainees:</Typography>
                      {item.trainees.length > 0 ? (
                        <ul>
                          {item.trainees.map((trainee, traineeIndex) => (
                            <li key={traineeIndex}>{trainee.trainee_name}</li>
                          ))}
                        </ul>
                      ) : (
                        <Typography>No Trainees Assigned</Typography>
                      )}
                    </div>
                    {item.training_image && (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleImageDialogOpen(item.training_image)}
                       
                      >
                        View Image
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Image Dialog */}
      <Dialog
        open={openImageDialog}
        onClose={handleImageDialogClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Training Image</DialogTitle>
        <DialogContent>
          <img
            src={`data:image/jpeg;base64,${currentImage}`}
            alt="Training"
            style={{ width: '45%', height: '350px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleImageDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={reportData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default Report;
