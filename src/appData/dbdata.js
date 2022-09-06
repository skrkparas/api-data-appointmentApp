module.exports = {
  tables: {
    appointmentMaster: {
      tableName: 'AppointmentData',
      column: {
        id: 'id',
        appointmentID: 'appointmentID',
        customerId:'customerID',
        doctorId:'doctorID',
        prescriptionId:'prescriptionID',
        status:'status',
        therapy:'therapy',
        cartLink:'cartLink',
        fileLink:'fileLink',
        consultDate: 'consultDate',
        consultTime: 'consultTime',
        unattendedReason:'unattendedReason',
        classicalMedComment: 'classicalMedComment',
        reviewFollowup:'reviewFollowup',
        utm: 'UTM_source',
        sz: 'sz',
        consultedTime:'	consultedTime'
      },
    },
    doctorMaster: {
      tableName: 'DoctorMaster',
      column: {
        id: 'doctorId',
        name: 'name',
        email: 'email',
        phone: 'phone',
        address: 'address',
      },
    },
    therapy: {
      tableName: 'Therapy',
      column: {
        id: 'id',
        name: 'name',
      },
    },
    prescription: {
      tableName: 'Prescription',
      column: {
        id: 'id',
        product1: 'product1',
        product1_how_to_use: 'product1_how_to_use',
        product1_dosage: 'product1_dosage',
        product2: 'product2',
        product2_how_to_use: 'product2_how_to_use',
        product2_dosage: 'product2_dosage',
        product3: 'product3',
        product3_how_to_use: 'product3_how_to_use',
        product3_dosage: 'product3_dosage',
        product4: 'product4',
        product4_how_to_use: 'product4_how_to_use',
        product4_dosage: 'product4_dosage',
      },
    },
    productMaster: {
      tableName: 'ProductMaster',
      column: {
        id: 'id',
        name: 'name',
        SKU: 'SKU',
        price: 'price',
        retailPrice: 'retailPrice',
        salePrice: 'salePrice',
        taxId: 'taxID',
      },
    },
    customer: {
      tableName: 'customer',
      column: {
        id: 'id',
        age: 'age',
        gender: 'gender',
        name: 'name',
        phone: 'phone',
        email: 'email',
      },
    },
  },
};
