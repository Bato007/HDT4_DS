from dash import Dash, dcc, html, Input, Output, ctx
import plotly.express as px
import pandas as pd

app = Dash(__name__)

data = pd.read_csv('./words.csv', encoding='utf8')

app.layout = html.Div(
  children=[
    dcc.Graph(
      id='graph',
    ),
    html.P("Type:"),
    dcc.Dropdown(
      id='target',
      options=['Accident', 'Non Accident'],
      value='Accident', clearable=False
    ),
    html.P("Amount:"),
    dcc.Dropdown(
      id='amount',
      options=[10, 15, 20],
      value=10, clearable=False
    ),
  ]
)

@app.callback(
  Output("graph", "figure"), 
  Input("target", "value"),
  Input("amount", "value"),
)

def generate_chart(target, amount):
  if (target == 'Non Accident'):
    df = data[data['target'] == '0'].head(amount)
  else:
    df = data[data['target'] == '1'].head(amount)

  fig = px.bar(
    df,
    x="label",
    y="value",
  )

  fig.update_traces(marker_color='#12E0FC')

  return fig

app.run_server(debug=True)