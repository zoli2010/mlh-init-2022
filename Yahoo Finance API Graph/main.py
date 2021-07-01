import datetime
import fix_yahoo_finance
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from pandas_datareader import data as pdr

stock_name = input("Please enter your targeted stock name (AAPL, GME, etc.): ")

stock = pdr.get_data_yahoo(stock_name,
                          start=datetime.datetime(2006, 10, 1),
                          end=datetime.datetime(2021, 7, 1))

stock.head()

stock.index

stock.columns

stock['diff'] = aapl.Open - aapl.Close

del stock['diff']

stock['Close'].plot(grid=True)

plt.show()