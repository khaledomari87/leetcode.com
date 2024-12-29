tail -n +10 file.txt | head -n 1
sed '10q;d' file.txt
sed -n 10p file.txt
