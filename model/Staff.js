const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      },
    },

    password: {
      type: String,
      required: true,
      minlength: [6, 'Minimum password length is 6 characters'],
      trim: true,
    },

    type: {
      type: String,
      default: 'isStaff',
    },
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model('user', staffSchema);
