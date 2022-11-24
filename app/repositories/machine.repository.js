const { exec } = require('../database/sqlConfig');

exports.findBySerialNumber = (serialNumber) => {
    return exec(
        `SELECT id
            FROM mic_machine
                WHERE serial_number = '${serialNumber}';`
    );
};

exports.create = (machine) => {
    return exec(
        `INSERT INTO mic_machine
          VALUES (
            ${machine.companyId},
            '${machine.serialNumber}',
            ${machine.ramCapacity},
            ${machine.diskCapacity},
            ${machine.cpuCapacity},
            ${machine.cpuLogicalPorts}               
            );`
    );
};

exports.findById = (machineId) => {
    return exec(
        `SELECT *
            FROM mic_machine
                WHERE id = ${machineId};`
    )
}

exports.findByCompany = (companyId) => {
    return exec(
        `SELECT *
            FROM mic_machine
                WHERE fk_company = ${companyId}`
    )
}