const select = document.getElementById("http-status");
const result = document.getElementById('result');

const resultitem = {
  "200": {
    "title": "OK",
    "bangla_meaning": "অনুরোধটি সফলভাবে সম্পন্ন হয়েছে।"
  },
  "201": {
    "title": "Created",
    "bangla_meaning": "নতুন কোনো রিসোর্স সফলভাবে তৈরি হয়েছে।"
  },
  "204": {
    "title": "No Content",
    "bangla_meaning": "অনুরোধ সফল হয়েছে কিন্তু রেসপন্সে কোনো কনটেন্ট নেই।"
  },
  "400": {
    "title": "Bad Request",
    "bangla_meaning": "রিসোর্সে পাঠানো অনুরোধ ভুল ছিল।"
  },
  "401": {
    "title": "Unauthorized",
    "bangla_meaning": "অনুমোদন ছাড়া অনুরোধ করা হয়েছে। লগইন প্রয়োজন।"
  },
  "403": {
    "title": "Forbidden",
    "bangla_meaning": "আপনার অনুমতি থাকলেও রিসোর্সে অ্যাক্সেস নিষিদ্ধ।"
  },
  "404": {
    "title": "Not Found",
    "bangla_meaning": "চাওয়া রিসোর্সটি সার্ভারে পাওয়া যায়নি।"
  },
  "405": {
    "title": "Method Not Allowed",
    "bangla_meaning": "এই রিসোর্সে ব্যবহৃত HTTP মেথডটি অনুমোদিত নয়।"
  },
  "408": {
    "title": "Request Timeout",
    "bangla_meaning": "সার্ভার নির্দিষ্ট সময়ের মধ্যে অনুরোধের উত্তর পায়নি।"
  },
  "409": {
    "title": "Conflict",
    "bangla_meaning": "অনুরোধটি বিদ্যমান ডেটার সঙ্গে দ্বন্দ্ব সৃষ্টি করেছে।"
  },
  "429": {
    "title": "Too Many Requests",
    "bangla_meaning": "একই ইউজার খুব বেশি অনুরোধ করেছে অল্প সময়ে।"
  },
  "500": {
    "title": "Internal Server Error",
    "bangla_meaning": "সার্ভারে কোনো অভ্যন্তরীণ ত্রুটি ঘটেছে।"
  },
  "501": {
    "title": "Not Implemented",
    "bangla_meaning": "সার্ভার অনুরোধটি বুঝতে পেরেছে কিন্তু সেটি বাস্তবায়ন করেনি।"
  },
  "502": {
    "title": "Bad Gateway",
    "bangla_meaning": "গেটওয়ে বা প্রক্সি সার্ভার থেকে অবৈধ রেসপন্স পেয়েছে।"
  },
  "503": {
    "title": "Service Unavailable",
    "bangla_meaning": "সার্ভার বর্তমানে ব্যস্ত বা মেইন্টেনেন্সে আছে।"
  },
  "504": {
    "title": "Gateway Timeout",
    "bangla_meaning": "গেটওয়ে বা প্রক্সি নির্ধারিত সময়ের মধ্যে রেসপন্স পায়নি।"
  }
};

select.addEventListener('change', () => {
  const code = select.value;
  const info = resultitem[code];

  if (code && info) {
    result.innerHTML = `
      <div class="bg-white p-4 mt-5 rounded-2xl shadow-lg border border-indigo-200">
        <p class="text-xl font-bold text-indigo-700 mb-2">HTTP Status Code: ${code} - ${info.title}</p>
        <img src="https://http.cat/${code}" alt="HTTP Cat ${code}" class="rounded-xl shadow-md mb-4 w-full">
        <p class="text-gray-800 text-base font-[Hind_Siliguri] font-medium">${info.bangla_meaning}</p>
      </div>
    `;
  } else {
    result.innerHTML = '';
  }
});
