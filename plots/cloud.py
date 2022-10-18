from dash import Dash, dcc, html, Input, Output
from dash_holoniq_wordcloud import DashWordcloud
import pandas as pd

app = Dash(__name__)
data = pd.read_csv('./words.csv', encoding='utf8')

security_data = [
    ["Equity", 74],
    ["Bond", 45],
    ["Global", 30],
    ["Sector Equity", 17],
    ["EUR", 15],
    ["Large Cap", 13],
    ["Europe", 11],
]

a_df = data[data['target'] == '1'].head(15)
na_df = data[data['target'] == '0'].head(15)

a_data = [[row['label'], int(row['value'])] for index, row in a_df.iterrows()]
na_data = [[row['label'], int(row['value'])] for index, row in na_df.iterrows()]

app.layout = html.Div(
  children=[
    html.P("Accident"),
    html.Div([
      DashWordcloud(
        id='wordcloud',
        list=a_data,
        width=500,
        height=300,
        gridSize=2,
        color='#1125F2',
        rotateRatio=0.5,
        shrinkToFit=True,
        shape='circle',
        hover=True
      )
    ]),
    html.P("Non Accident"),
    html.Div([
      DashWordcloud(
        id='non-wordcloud',
        list=na_data,
        width=300,
        height=200,
        gridSize=16,
        color='#1125F2',
        rotateRatio=0.5,
        shrinkToFit=True,
        shape='circle',
        hover=True
      )
    ]),
  ]
)

app.run_server(debug=True)
