const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser");
const QrSchema = require("./QrSchema");
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
// const path = require("path");

app.use(express.json());
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());
app.get("/api/v1/verify/:qrcode", async (req, res) => {
  let data = await QrSchema.findOne({ QrCode: req.params.qrcode });
  if (data) {
    if (data.Used == false) {
      res.status(200).json({
        success: true,
        message: "Verification Successful",
        data,
      });
      await QrSchema.findOneAndUpdate(
        { QrCode: req.params.qrcode },
        { Used: true },
        {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        }
      );
    } else {
      res.status(200).json({
        success: false,
        message: "This QR Code Is Already Scanned!",
        data,
      });
    }
  } else {
    res.status(200).json({
      success: false,
      message: "Invalid QR Code",
      data,
    });
  }
});
app.get("/api/v1/Verify/:qrcode", async (req, res) => {
  let data = await QrSchema.findOne({ QrCode: req.params.qrcode });
  if (data) {
    if (data.Used == false) {
      res.status(200).json({
        success: true,
        message: "verification successfull",
        data,
      });
      await QrSchema.findOneAndUpdate(
        { QrCode: req.params.qrcode },
        { Used: true },
        {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        }
      );
    } else {
      res.status(200).json({
        success: false,
        message: "This QR code is already scanned!",
        data,
      });
    }
  } else {
    res.status(200).json({
      success: false,
      message: "invalid qr code",
      data,
    });
  }
});
app.get("/lahooti/:qrcode", async (req, res) => {
  let data = await QrSchema.findOne({ QrCode: req.params.qrcode });
  if (data) {
    if (data.Used == false) {
      res.status(200).json({
        success: true,
        message: "Verification Successful",
        data,
      });
      await QrSchema.findOneAndUpdate(
        { QrCode: req.params.qrcode },
        { Used: true },
        {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        }
      );
    } else {
      res.status(200).json({
        success: false,
        message: "This QR Code Is Already Scanned!",
        data,
      });
    }
  } else {
    res.status(200).json({
      success: false,
      message: "Invalid QR Code",
      data,
    });
  }
});
app.get("/", async (req, res) => {
 
    res.status(200).json({
      success: false,
      message: "Invalid QR Code",
     
    });
  
});
//Route Imports:
// const QrSchemaRoute = require("./routes/QrSchemaRoute");
// app.use("/api/v1", QrSchemaRoute);
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

//Middleware For Errors:

// app.use(errorMiddleware);

module.exports = app;
