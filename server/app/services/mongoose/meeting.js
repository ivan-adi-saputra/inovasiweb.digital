const Meeting = require("../../api/v1/meeting/model");
const { NotFoundError } = require("../../errors");

// Helper untuk pengecekan ID
const checkMeetingExistence = async (id) => {
  const meeting = await Meeting.findById(id);
  if (!meeting)
    throw new NotFoundError(`Meeting tidak ditemukan dengan id: ${id}`);
  return meeting;
};

// Mengambil semua data meeting
const getAllMeeting = async (req) => {
  const { title } = req.query;
  let condition = {};

  if (title) {
    condition = { title: { $regex: new RegExp(title, "i") } };
  }

  return await Meeting.find(condition);
};

// Mengambil data meeting berdasarkan ID
const getMeetingById = async (req) => {
  const { id } = req.params;
  return checkMeetingExistence(id);
};

// Membuat meeting baru
const createMeeting = async (req) => {
  const { client, email, phone, datetime, title, description } = req.body;

  return await Meeting.create({
    client,
    email,
    phone,
    datetime,
    title,
    description,
  });
};

// Mengupdate meeting berdasarkan ID
const updateMeeting = async (req) => {
  const { client, email, phone, datetime, title, description } = req.body;
  const { id } = req.params;

  const updatedMeeting = await Meeting.findByIdAndUpdate(
    id,
    { client, email, phone, datetime, title, description },
    { new: true }
  );
  if (!updatedMeeting)
    throw new NotFoundError(`Meeting tidak ditemukan dengan id: ${id}`);

  return updatedMeeting;
};

// Menghapus meeting berdasarkan ID
const deleteMeeting = async (req) => {
  const { id } = req.params;

  const deletedMeeting = await Meeting.findByIdAndDelete(id);
  if (!deletedMeeting)
    throw new NotFoundError(`Meeting tidak ditemukan dengan id: ${id}`);

  return deletedMeeting;
};

const checkingMeeting = checkMeetingExistence;

module.exports = {
  getAllMeeting,
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting,
  checkingMeeting,
};
