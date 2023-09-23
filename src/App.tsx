import './App.css'

// Main Guide Component
const FinancialIntelligenceGuide = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Guide to Advancing in Financial Intelligence</h1>
      <LinkedInProfileGuide />
      <ChatGPTGuide />
    </div>
  );
};

// LinkedIn Profile Guide Component
const LinkedInProfileGuide = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Creating a LinkedIn Profile</h2>
      <p className="text-gray-600 mb-4">It is important to create a professional profile on LinkedIn to showcase your skills and achievements. Here are some tips to enhance your profile:</p>
      <ul className="list-disc pl-6">
        <li className="mb-2"><span className="font-semibold">Good Photo:</span> Use a clear, professional-looking photo of yourself. Avoid using casual or blurry photos.</li>
        <li className="mb-2"><span className="font-semibold">Good Description:</span> Write a concise and impactful description that highlights your expertise and experience.</li>
      </ul>
    </section>
  );
};

// Chat GPT Guide Component
const ChatGPTGuide = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Chat GPT Introduction</h2>
      <p className="text-gray-600 mb-4">Chat GPT is a powerful language model developed by OpenAI. It is designed to understand and generate human-like text based on the input it receives.</p>
      <h3 className="text-xl font-medium text-blue-600 mb-3">Alternatives to Chat GPT</h3>
      <ul className="list-disc pl-6">
        <li className="mb-2"><span className="font-semibold">Google Bard:</span> Another advanced language model developed by Google. It is also capable of generating human-like text and is used in various applications.</li>
      </ul>
    </section>
  );
};

export default FinancialIntelligenceGuide;
