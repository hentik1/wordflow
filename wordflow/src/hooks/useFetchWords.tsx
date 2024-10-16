import { useEffect, useState } from "react";

function useFetchWords() {
  const [wordData, setWordData] = useState<string[]>([]);
  // Fetch the txt file in public/100k_words.txt and put it into wordData
  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const filePath = `${import.meta.env.BASE_URL}100k_words.txt`;
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        const data: string = await response.text();
        const lines: string[] = data.split("\n").map((line) => line.trim());
        setWordData(lines);
      } catch (error) {
        console.error("Error fetching the file:", error);
      }
    };
    fetchFileData();
  }, []);

  return { wordData };
}

export default useFetchWords;
