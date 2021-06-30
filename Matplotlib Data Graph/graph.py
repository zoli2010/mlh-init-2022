import matplotlib.pyplot as plt

year = []
dataset1 = []
dataset2 = []

startYear = int(input("Input the starting year: "))
endYear = int(input("Input the ending year: "))
for i in range(startYear, endYear+1):
  data1 = float(input("Input the data value for Dataset 1 in " + str(i) + ": "))
  data2 = float(input("Input the data value for Dataset 2 in " + str(i) + ": "))
  year.append(i)
  dataset1.append(data1)
  dataset2.append(data2)

plt.plot(year, dataset1, 'k',
         year, dataset2)

plt.xlabel('Year')
plt.ylabel('Value')
plt.show()