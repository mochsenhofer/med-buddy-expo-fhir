export const Patient = {
  resourceType: "Patient",
  id: "",
  gender: "",
  birthDate: "",
  identifier: [
    {
      use: "usual",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "SS",
          },
        ],
      },
      system: "urn:oid:1.2.36.146.595.217.0.1",
      value: "",
    },
  ],
  name: [
    {
      family: "",
      given: [""],
    },
  ],
  communication: [
    {
      language: {
        coding: [
          {
            system: "urn:ietf:bcp:47",
            code: "tr",
          },
        ],
      },
    },
  ],
};
