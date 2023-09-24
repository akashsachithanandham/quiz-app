export default function getQuestion() {
    let questions_api = {
      data: [
        {
          question_id: 1,
          question: {
            text: "What is the Capital of India"
          },
          images: [
            {
              image_id: 1,
              url: "https://t4.ftcdn.net/jpg/01/14/62/33/360_F_114623372_ZUIjiBqg3GGiTkkvFzAk4GJ0zpqliJE7.jpg",
              width: "300px",
              height: "300px"
            }
          ],
          options: [
            {
              text: "New Delhi",
              key: "option_new_delhi"
            },
            {
              text: "Chennai",
              key: "option_chennai"
            },
            {
              text: "Bangalore",
              key: "option_new_delhi"
            },
            {
              text: "Hyderabad",
              key: "option_hyderabad"
            }
          ],
          answer: "option_new_delhi"
        },
        {
          question_id: 2,
          question: {
            text: "What is the Capital of Tamil Nadu"
          },
          options: [
            {
              text: "New Delhi",
              key: "option_new_delhi"
            },
            {
              text: "Chennai",
              key: "option_chennai"
            },
            {
              text: "Bangalore",
              key: "option_new_delhi"
            },
            {
              text: "Hyderabad",
              key: "option_hyderabad"
            }
          ],
          answer: "option_chennai"
        },
        {
          question_id: 3,
          question: {
            text: "What is the Capital of Telangana"
          },
          options: [
            {
              text: "New Delhi",
              key: "option_new_delhi"
            },
            {
              text: "Chennai",
              key: "option_chennai"
            },
            {
              text: "Bangalore",
              key: "option_new_delhi"
            },
            {
              text: "Hyderabad",
              key: "option_hyderabad"
            }
          ],
          answer: "option_hyderabad"
        },
        {
          question_id: 4,
          question: {
            text: "What is the Capital of Karnataka"
          },
          options: [
            {
              text: "New Delhi",
              key: "option_new_delhi"
            },
            {
              text: "Chennai",
              key: "option_chennai"
            },
            {
              text: "Bangalore",
              key: "option_new_delhi"
            },
            {
              text: "Hyderabad",
              key: "option_hyderabad"
            }
          ],
          answer: "option_bangalore"
        },
        {
          question_id: 5,
          question: {
            text: "What is the Capital of Andhra Pradesh"
          },
          images: [
            {
              image_id: 1,
              url: "https://t4.ftcdn.net/jpg/01/14/62/33/360_F_114623372_ZUIjiBqg3GGiTkkvFzAk4GJ0zpqliJE7.jpg"
            }
          ],
          options: [
            {
              text: "Amaravathi",
              key: "option_amravathi"
            },
            {
              text: "Chennai",
              key: "option_chennai"
            },
            {
              text: "Bangalore",
              key: "option_new_delhi"
            },
            {
              text: "Hyderabad",
              key: "option_hyderabad"
            }
          ],
          answer: "option_amaravathi"
        }
      ]
    
    }
    return questions_api;
  }
