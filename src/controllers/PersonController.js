const { v4: uuid } = require('uuid');
const Person = require('../models/person');

module.exports = {
  //controler para rota get
  async index(req, res) {
    try {
      const person = await Person.find();
      return res.status(200).json({ person })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  //controler para rotas post
  async store(req, res) {
    const {
      name,
      email,
      image,
      password,
      birth,
      sex,
      schooling,
      marital,
      document1,
      document2,
      phone1,
      phone2,
      address,
      number,
      district,
      zipcode,
      country,
      state,
      city,
      group,
      category,
      office,
      conversion,
      notes,
      baptized,
      registerDate,
      spouse,
      convertedSpouse,
      baptismDate,
      ageGroup,
      age,
      additionalField
    } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Missing name.' })
    }
    const person = new Person({
      _id: uuid(),
      name,
      image,
      email,
      password,
      birth,
      sex,
      schooling,
      marital,
      document1,
      document2,
      phone1,
      phone2,
      address,
      number,
      district,
      zipcode,
      country,
      state,
      city,
      group,
      category,
      office,
      conversion,
      notes,
      baptized,
      registerDate,
      spouse,
      convertedSpouse,
      baptismDate,
      ageGroup,
      age,
      additionalField
    });
    try {
      await person.save();
      return res.status(201).json({ message: 'Person added succesfully!' })
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  // update person data
  async update(req, res) {
    const {
      name,
      email,
      image,
      password,
      birth,
      sex,
      schooling,
      marital,
      document1,
      document2,
      phone1,
      phone2,
      address,
      number,
      district,
      zipcode,
      country,
      state,
      city,
      group,
      category,
      office,
      conversion,
      notes,
      baptized,
      registerDate,
      spouse,
      convertedSpouse,
      baptismDate,
      ageGroup,
      age,
      additionalField
    } = req.body;
    if (!name
      && !email
      && !image
      && !password
      && !birth
      && !sex
      && !schooling
      && !marital
      && !document1
      && !document2
      && !phone1
      && !phone2
      && !address
      && !number
      && !district
      && !zipcode
      && !country
      && !state
      && !city
      && !group
      && !category
      && !office
      && !conversion
      && !notes
      && !baptized
      && !registerDate
      && !spouse
      && !convertedSpouse
      && !baptismDate
      && !ageGroup
      && !age
      && !additionalField
    ) {
      return res.status(200).json({ error: 'you must inform a now name' })
    }
    if (name) res.person.name = name;
    if (email) res.person.email = email
    if (image) res.person.image = image
    if (password) res.person.password = password
    if (birth) res.person.birth = birth
    if (sex) res.person.sex = sex
    if (schooling) res.person.schooling = schooling
    if (marital) res.person.marital = marital
    if (document1) res.person.document1 = document1
    if (document2) res.person.document2 = document2
    if (phone1) res.person.phone1 = phone1
    if (phone2) res.person.phone2 = phone2
    if (address) res.person.address = address
    if (number) res.person.number = number
    if (district) res.person.district = district
    if (zipcode) res.person.zipcode = zipcode
    if (country) res.person.country = country
    if (state) res.person.state = state
    if (city) res.person.city = city
    if (group) res.person.group = group
    if (category) res.person.category = category
    if (office) res.person.office = office
    if (conversion) res.person.conversion = conversion
    if (notes) res.person.notes = notes
    if (baptized) res.person.baptized = baptized
    if (registerDate) res.person.registerDate = registerDate
    if (spouse) res.person.spouse = spouse
    if (convertedSpouse) res.person.convertedSpouse = convertedSpouse
    if (baptismDate) res.person.baptismDate = baptismDate
    if (ageGroup) res.person.ageGroup = ageGroup
    if (age) res.person.age = age
    if (additionalField) res.person.additionalField = additionalField

    try {
      await res.person.save();
      return res.status(200).json({ message: 'Person updated successfully!' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
  //delete 
  async delete(req, res) {
    try {
      await res.person.remove();
      return res.status(200).json({ message: 'Person deleted successfully!' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
}