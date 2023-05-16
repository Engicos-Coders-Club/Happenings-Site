function getImageUrl(name) {
  return new URL(`${name}`, import.meta.url).href;
}

export const councilData = [
  {
    Name: "Sumit Komarpant",
    Designation: "GENERAL SECRETARY",
    Contact: "8999579536",
    pic: getImageUrl("../../assets/teams/council/sumit.jpg")
  },
  {
    Name: "Ruthveek Dessai",
    Designation: "CHAIRMAN",
    Contact: "9309981749",
    pic: getImageUrl("../../assets/teams/council/ruth.jpg")
  },
  {
    Name: "Sarthak Bandodkar",
    Designation: "CULTURAL SECRETARY",
    Contact: "7057496089",
    pic: getImageUrl("../../assets/teams/council/sarthak.jpg")
  },
  {
    Name: "Shazeab Sayed",
    Designation: "PUBLIC RELATION SECRETARY",
    Contact: "7028889127",
    pic: getImageUrl("../../assets/teams/council/shazz.jpg")
  },
  {
    Name: "Nehal Sinari",
    Designation: "ACADEMIC SECRETARY",
    Contact: "9689778470",
    pic: getImageUrl("../../assets/teams/council/nihal.jpg")
  },
  {
    Name: "Akash Gauns",
    Designation: "GYMKHANA SECRETARY",
    Contact: "7768804271",
    pic: getImageUrl("../../assets/teams/council/akash.jpg")
  },
  {
    Name: "Atharva Parkhe",
    Designation: "PLACEMENT SECRETARY",
    Contact: "8007609672",
    pic: getImageUrl("../../assets/teams/council/atharva.jpg")
  },
  {
    Name: "Mansi Mishra",
    Designation: "MAGAZINE SECRETARY",
    Contact: "8459501297",
    pic: getImageUrl("../../assets/teams/council/mansi.jpg")
  },
  {
    Name: "Divya Ramnathker",
    Designation: "LADIES SECRETARY",
    Contact: "9371919234",
    pic: getImageUrl("../../assets/teams/council/divya.jpg")
  },
  {
    Name: "Swapnil gawas",
    Designation: "AUDITOR 1",
    Contact: "9762233006",
    pic: getImageUrl("../../assets/teams/council/swapnil.jpg")
  },
  {
    Name: "Saiel Pai Kane",
    Designation: "AUDITOR 2",
    Contact: "7038788388",
    pic: getImageUrl("../../assets/teams/council/saiel.jpg")
  },
 {
    Name: "Saara Sehgal",
    Designation: "LADIES REPRESENTATIVE 1",
    Contact: "9561092581",
    pic: getImageUrl("../../assets/teams/council/saara.jpg")
  },
  {
    Name: "Urvi Gaundalkar",
    Designation: "LADIES REPRESENTATIVE 2",
    Contact: "7057942384",
    pic: getImageUrl("../../assets/teams/council/urvi.jpg")
  }
]